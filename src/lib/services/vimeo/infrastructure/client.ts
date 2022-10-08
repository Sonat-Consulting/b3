import { accessToken } from '$lib/services/vimeo/infrastructure/configuration';

export interface IVimeoClient {
	get<T>(path: string): Promise<T>;
}

export class VimeoClient implements IVimeoClient {
	private readonly baseUrl: string = 'https://api.vimeo.com';
	private readonly token: string = accessToken;

	public async get<T>(path: string): Promise<T> {
		const response = await fetch(this.baseUrl + path, {
			headers: {
				Authorization: `Bearer ${this.token}`
			}
		});

		const body = await response.json();

		return body as T;
	}
}
