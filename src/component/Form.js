import { useState } from "react";

export default function Form() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextareaChange = (e) => {
        setQuestion(e.target.value);
    };

    // const onButtonClick = () => {
    //     // 버튼을 누르면 객체를 만들어서 setDiscussionsData(obj, ...discussionData)
    // }

    return (
        <div className="form__container">
            <form action="" method="get" className="form"> 
                <div className="form__input--wrapper">

                    {/* 이름 */}
                    <div className="form__input--name"> 
                        <label htmlFor="name">Name</label>
                        <label className="symbol">{'<'}</label>
                            <input 
                                onChange={handleNameChange}
                                type="text" 
                                name="name" 
                                id="name" 
                                required />
                        <label className="symbol">{'>'}</label>
                    </div>

                    {/* 글 제목 */}
                    <div className="form__input--title"> 
                        <label htmlFor="name">Title</label>
                        <label className="symbol">{'<'}</label>
                            <input 
                                onChange={handleTitleChange}
                                type="text" 
                                name="title" 
                                id="title" 
                                required />
                        <label className="symbol">{'>'}</label>
                    </div>

                    {/* 텍스트 박스랑 버튼 */}
                    <div className="textbox_and_button">
                        <div className="form__textbox">
                            <label htmlFor="story">Question</label>
                            <textarea 
                                onChange={handleTextareaChange}
                                id="story" 
                                name="story" 
                                placeholder="질문을 작성하세요." 
                                required>
                            </textarea>
                        </div>
                        <div className="form__submit"> 
                            <button 
                                // onClick={onButtonClick}
                                type="submit"
                                className="submit_btn">
                                    <i className="fa-solid fa-comment"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}