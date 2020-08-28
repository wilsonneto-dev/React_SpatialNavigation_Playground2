import React, { useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

const InnerParentFocusable = ({ children, setFocus, focusTo }) => {
  useEffect(() => {
    if (focusTo) {
      setFocus(focusTo);
    }
  }, [focusTo]);
  return <>{children}</>;
};

const ParentOfFocusables = withFocusable({
  trackChildren: true,
  autoRestoreFocus: true,
})(InnerParentFocusable);

export default ParentOfFocusables;
