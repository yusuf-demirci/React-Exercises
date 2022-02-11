import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    return (
        <div>
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: "80px" }}
            >
                <Link to="/card/alex" className="ui header">Alex</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit consectetur est veritatis ullam saepe labore fugiat maiores fugit tenetur.</p>
            </div>
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: "80px" }}
            >
                <Link to="/card/wilma" className="ui header">Wilma</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit consectetur est veritatis ullam saepe labore fugiat maiores fugit tenetur.</p>
            </div>
        </div>

    )
}

export default Contact;