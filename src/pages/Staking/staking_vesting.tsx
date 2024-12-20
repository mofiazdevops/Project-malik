import VestingDetail from "pages/Vesting/VestingDetail";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StakingDetails from "./StakingDetail";

export default function StakingVesting() {
    const location = useLocation();

    useEffect(() => {
        if (location && location.state && location.state.from === "staking") {
            document?.querySelector(`#staking`)?.scrollIntoView();
        } else if (
            location &&
            location.state &&
            location.state.from === "vesting"
        ) {
            document?.querySelector(`#vesting`)?.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return (
        <>
            <div id="staking">
                <StakingDetails />
            </div>
            <div id="vesting">
                <VestingDetail />
            </div>
        </>
    );
}
