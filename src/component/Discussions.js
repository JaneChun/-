import Discussion from './Discussion';
import Form from './Form';
import Pagenation from './Pagenation';
import Loading from './Loading';
import { useFetch } from '../util/useFetch';
import { useState } from 'react';

export default function Discussions() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useFetch(setIsLoading);

	const addDiscussion = (newObj) => {
		setData([newObj, ...data]);
		console.log('addDiscussion 함수가 실행되었습니다.');
	};

	return (
		<div>
			<Form addDiscussion={addDiscussion} />
			<Pagenation />
			{isLoading ? (
				<Loading />
			) : (
				<div className='discussion__wrapper'>
					<ul className='discussions__container'>
						{data.map((el) => {
							const { url, title, id, author, createdAt, updatedAt, bodyHTML, answer } = el.node;
							return (
								<Discussion
									key={id}
									id={id}
									answer={answer}
									author={author.login}
									avatarUrl={author.avatarUrl}
									bodyHTML={bodyHTML}
									createdAt={createdAt}
									title={title}
									updatedAt={updatedAt}
									url={url}
									// answer는 아직 안받아옴
								/>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
