import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";

const CardControl = props => {
  let { position, icon, handler } = props;
  return (
    <div className={`card-control card-control-${position}`} onClick={handler}>
      <Tooltip placement={position} >
        <IconButton>
          <i className={`fa fa-${icon}`} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default CardControl;
