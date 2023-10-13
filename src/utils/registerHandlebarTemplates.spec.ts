import { HttpClient } from '../HttpClient';
import { PartialsEnum } from './PartialsEnum';
import { registerHandlebarTemplates } from './registerHandlebarTemplates';
import { TemplatesEnum } from './TemplatesEnum';

describe('registerHandlebarTemplates', () => {
    it('should return correct templates', () => {
        const templates = registerHandlebarTemplates({
            httpClient: HttpClient.FETCH,
            useOptions: false,
            useUnionTypes: false,
            templatesOverride: {},
            partialsOverride: {},
        });
        expect(templates.index).toBeDefined();
        expect(templates.exports.model).toBeDefined();
        expect(templates.exports.schema).toBeDefined();
        expect(templates.exports.service).toBeDefined();
        expect(templates.core.settings).toBeDefined();
        expect(templates.core.apiError).toBeDefined();
        expect(templates.core.apiRequestOptions).toBeDefined();
        expect(templates.core.apiResult).toBeDefined();
        expect(templates.core.request).toBeDefined();
    });
    it('should allow templateOverwrite', () => {
        const customTemplate = 'custom index';
        const templates = registerHandlebarTemplates({
            httpClient: HttpClient.FETCH,
            useOptions: false,
            useUnionTypes: false,
            templatesOverride: {
                [TemplatesEnum.client]: customTemplate,
            },
            partialsOverride: {},
        });
        expect(templates.client({})).toEqual('custom index');
    });

    it('should allow partialOverwrite', () => {
        const templates = registerHandlebarTemplates({
            httpClient: HttpClient.FETCH,
            useOptions: false,
            useUnionTypes: false,
            templatesOverride: { [TemplatesEnum.index]: `Index template {{> ${PartialsEnum.angularGetHeaders} }}` },
            partialsOverride: { [PartialsEnum.angularGetHeaders]: `partial content` },
        });

        expect(templates.index({})).toEqual('Index template partial content');
    });

    it('should allow partialOverwrite with a custom template', () => {
        const templates = registerHandlebarTemplates({
            httpClient: HttpClient.FETCH,
            useOptions: false,
            useUnionTypes: false,
            templatesOverride: { [TemplatesEnum.index]: `Index template {{> custom }}` },
            partialsOverride: { custom: `custom content` },
        });

        expect(templates.index({})).toEqual('Index template custom content');
    });
});
