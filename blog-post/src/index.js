import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

function App() {
    return (
        <div className="ui comments">
            <UserCard>
                <SingleComment
                    name="Ali"
                    date="Today at 5:00PM"
                    text="it's amazing"
                    image="https://picsum.photos/200"
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name="Veli"
                    date="Today at 5:00PM"
                    text="great job"
                    image="https://picsum.photos/200"
                /></UserCard>
            <UserCard>
                <SingleComment
                    name="Deli"
                    date="Today at 7:00PM"
                    text="thanks..."
                    image="https://picsum.photos/200"
                /></UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)