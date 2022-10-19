import { useEffect, useState } from "react";
import Discussion from "./Discussion";

export default function Discussions() {
    const [discussionsData, setDiscussionsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/discussions')
            .then((res) => res.json())
            .then((data) => setDiscussionsData(data));
    }, []);

    return (
        <div className="discussion__wrapper">
            <ul className="discussions__container">
                {discussionsData.map((d) => (
                    <Discussion 
                        answer={d.answer}
                        author={d.author}
                        avatarUrl={d.avatarUrl}
                        bodyHTML={d.bodyHTML}
                        createdAt={d.createdAt}
                        key={d.id}
                        title={d.title}
                        updatedAt={d.updatedAt}
                        url={d.url}
                    />
                ))}
            </ul>
        </div>
    );
}