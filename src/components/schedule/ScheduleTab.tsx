import React from "react";
import ComingSoon from "./ComingSoon";
import Schedule from "./Schedule";

type Props = {
  virtual: boolean;
};

const ScheduleTab: React.FC<Props> = (props: Props) => (
  <div>
    {/* <ComingSoon /> */}
    <Schedule tableLength={Infinity} homepage={false} virtual={props.virtual} />
  </div>
);
export default ScheduleTab;
