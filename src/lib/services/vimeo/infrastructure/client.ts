import { accessToken } from '$lib/services/vimeo/infrastructure/configuration';

class VimeoClient implements IVimeoClient {
	constructor(private readonly accessToken) {}

	public async get<T>(path: string): Promise<T> {
		const response = await fetch(`https://api.vimeo.com${path}`, {
			headers: {
				Authorization: `Bearer ${this.accessToken}`
			}
		});

		const body = await response.json();

		return body as T;
	}
}

const client = new VimeoClient(accessToken);

export default client;
