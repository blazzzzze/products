import CountDisplay from "./CountDisplay";
import { connect } from "react-redux";
import { IncrementCounter, DecrementCounter } from "../store"

const mapStoreToProps = (store) => {
    return {
        counter: store.counter
    }
}

const mapDispatchToCallback = {
    decCallback: DecrementCounter,
    incCallback: IncrementCounter
};

export default connect(mapStoreToProps, mapDispatchToCallback)(CountDisplay);