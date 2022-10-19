export default function Discussion(props) {
    return (
        <div>
            <li className="discussion__container"> 

                {/* 아바타 이미지 */}
                <div className="discussion__avatar--wrapper"> 
                <img className="discussion__avatar--image"
                    src={props.avatarUrl}
                    alt={`avatar of ${props.author}`}/>
                </div>

                {/* 글 내용 */}
                <div className="discussion__content"> 
                    <h2 className="discussion__title"><a href={props.url}>{props.title}</a></h2>
                    <div className="discussion__information">
                        {props.author}{props.createdAt}
                    </div>
                </div>
                <div className="discussion__answered"><p><i className="fa-solid fa-circle-check"></i></p></div> 
                {/* 체크 아이콘 <i className="fa-solid fa-circle-check"></i> */}
                {/* 체크 X 아이콘 <i className="fa-regular fa-circle-check"></i> */}

            </li>
        </div>
    );
}