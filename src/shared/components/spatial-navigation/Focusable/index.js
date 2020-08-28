import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

const InnerFocusable = ({ children }) => <>{children}</>;

const FocusableComponent = withFocusable()(InnerFocusable);

export default FocusableComponent;

/*
const ParentComponent = ({
  onItemPress,
  onArrowPress,
  onItemFocused,
  onItemBlurred,
  children,
}) => (
  <FocusableComponent
    trackChildren
    forgetLastFocusedChild
    focusKey={"FOCUSABLE_COMPONENT"}
    onEnterPress={onItemPress}
    onArrowPress={onArrowPress}
    onBecameFocused={onItemFocused}
    onBecameBlurred={onItemBlurred}
    autoRestoreFocus={false}
  >
    {children}
  </FocusableComponent>
);
*/
