import { useEffect } from "react";

function Customhook(props) {
    useEffect(() => {
        document.title = props + " hits on button";
    })
}

export default Customhook;