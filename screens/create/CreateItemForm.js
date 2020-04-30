import React, { useContext } from "react";

import Swiper from "react-native-swiper";
import CreateItemOne from "./itemOne";
import CreateItemTwo from "./itemTwo";
import CreateItemThree from "./itemThree";
import CreateItemFour from "./itemFour";
import CreateItemFive from "./itemFive";
import CreateItemSix from "./itemSix";
import { View } from "react-native";
import { useState } from "react";
import { UserContext } from "../../providers/user";
import { Footer, Icon, Button } from "native-base";
import FooterPageNavButtons from "../../components/FooterPageNavButtons";
import { styles as stylesheet } from "../../styles/screens/create";
import { VAIDATION_FIELDS } from "./validation";
import { withNavigation } from "react-navigation";
import { useFormContext } from "react-hook-form";
import { withFirebaseHOC } from "../../config/Firebase";
import { VEHICLE_STATES } from "../../constants";

let swiperRef = React.createRef(null);

const CreateItemForm = ({ navigation, firebase }) => {
  const { params } = navigation.state;
  const { mode } = params;

  const { watch, errors, triggerValidation, getValues } = useFormContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formValidated, setFormValidated] = useState(false);

  watch();

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const handleCircleClick = (index) => {
    if (formValidated) {
      const offset = index - currentIndex;
      swiperRef.current.scrollBy(offset);
    }
  };

  const handleNextClick = async () => {
    if (!formValidated) {
      const errors = await triggerValidation(VAIDATION_FIELDS);
      setFormValidated(true);
      if (!errors) return;
    }
    swiperRef.current.scrollBy(1);
  };

  const handleBackClick = () => {
    swiperRef.current.scrollBy(-1);
  };

  const values = getValues({ nest: true });
  const { vehicleType } = values || {};

  const formHasErrors = Object.keys(errors[vehicleType] || {}).length !== 0;
  const isNextButtonDisabled = currentIndex === 5 || formHasErrors;
  const isPrevButtonDisabled = currentIndex === 0;
  const isFormValid = Boolean(formValidated && !formHasErrors);

  const styles = stylesheet({ mode });

  const { uid } = useContext(UserContext);

  const saveAndCloseForm = async () => {
    const values = getValues({ nest: true });
    const { vehicleType } = values;

    const inventoryObj = {
      vehicleType,
      ...values[vehicleType],
      uid,
      state: VEHICLE_STATES.PENDING,
      createdAt: new Date().toISOString(),
    };

    let isSuccess;

    try {
      await firebase.addInventory(inventoryObj);
      isSuccess = true;
    } catch (e) {
      console.log(e);

      isSuccess = false;
    } finally {
      const type = isSuccess ? "success" : "error";
      const msg = isSuccess
        ? "Inventory Created"
        : "Inventory creation failed.";
      const desc = isSuccess ? "Saved as draft." : "Something went wrong.";

      navigation.navigate("Inventory", {
        notification: {
          type,
          msg,
          desc,
        },
      });
    }
  };

  React.useEffect(() => {
    navigation.setParams({ saveAndCloseForm: saveAndCloseForm, isFormValid });
  }, [isFormValid]);

  return (
    <View style={styles.content}>
      <Swiper
        showsPagination={false}
        loop={false}
        onIndexChanged={onIndexChanged}
        ref={swiperRef}
        scrollEnabled={isFormValid}
      >
        <CreateItemOne />
        <CreateItemTwo />
        <CreateItemThree />
        <CreateItemFour />
        <CreateItemFive />
        <CreateItemSix saveAndCloseForm={saveAndCloseForm} />
      </Swiper>

      <Footer style={styles.footer}>
        <Button
          transparent
          style={styles.prevButton}
          disabled={isPrevButtonDisabled}
          onPress={handleBackClick}
        >
          <Icon
            name="arrowleft"
            type="AntDesign"
            style={
              isPrevButtonDisabled ? styles.iconDisabled : styles.buttonIcon
            }
          />
        </Button>
        <FooterPageNavButtons
          numOfButtons={6}
          screenIndex={currentIndex}
          handleCircleClick={handleCircleClick}
        />
        <Button
          transparent
          style={styles.nextButton}
          iconRight
          disabled={isNextButtonDisabled}
          onPress={handleNextClick}
        >
          <Icon
            name="arrowright"
            type="AntDesign"
            style={
              isNextButtonDisabled ? styles.iconDisabled : styles.buttonIcon
            }
          />
        </Button>
      </Footer>
    </View>
  );
};
export default withNavigation(withFirebaseHOC(CreateItemForm));
