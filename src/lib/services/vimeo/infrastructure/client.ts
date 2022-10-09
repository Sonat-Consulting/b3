import { accessToken } from '$lib/services/vimeo/infrastructure/configuration';

export interface IVimeoClient {
	get<T>(path: string): Promise<T>;
}

export class VimeoClient implements IVimeoClient {
	private readonly baseUrl: string = 'https://api.vimeo.com';
	private readonly token: string = accessToken;

	public async get<T>(path: string): Promise<T> {
		const uri = this.baseUrl + path;
		const response = await fetch(uri, {
			headers: {
				Authorization: `Bearer ${this.token}`
			}
		});

		if (!response.ok) {
			throw new Error(`vimeo api returned status ${response.status} for uri ${uri}`);
		}

		const body = await response.json();

		return body as T;
	}
}
