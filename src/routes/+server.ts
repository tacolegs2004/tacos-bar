import type { UserType } from '$lib/types/UserType';

export default async function load(): Promise<UserType> {
	const res = await fetch('https://api.github.com/users/tacolegs2004');
	const data = await res.json();

	console.log(data);

	return data as UserType;
}
