import { useState, useEffect } from 'react';
import { graphql } from '@octokit/graphql';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const useFetch = (setIsLoading) => {
	const [data, setData] = useState([]);
	console.log('token', GITHUB_TOKEN);

	async function fetch() {
		const { repository } = await graphql(
			`
				{
					repository(owner: "codestates-seb", name: "agora-states-fe") {
						discussions(first: 50) {
							edges {
								node {
									url
									title
									id
									createdAt
									updatedAt
									bodyHTML
									author {
										avatarUrl(size: 10)
										... on User {
											login
										}
										login
									}
								}
							}
						}
					}
				}
			`,
			{
				headers: {
					authorization: `token ${GITHUB_TOKEN}`, // 직접 입력하면 작동하는데, env 환경 변수로 하려고 하면 Bad credentials 오류가 뜬다..
				},
			}
		);

		return repository;
	}

	useEffect(() => {
		fetch().then((res) => {
			setData([...res.discussions.edges]);
			setIsLoading(false);
		});
	}, []);

	return [data, setData];
};
