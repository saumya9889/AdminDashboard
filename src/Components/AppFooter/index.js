import { Typography , Space} from "antd";
import React from "react";

const AppFooter = () => {
    return (
        <div className="AppFooter">
       
            <Typography.Link href="tel: +9187347878">+9173782378</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>Terms of Use</Typography.Link>
        </div>
    );
};

export default AppFooter;