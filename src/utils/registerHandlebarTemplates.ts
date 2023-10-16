import { precompile } from 'handlebars';
import Handlebars from 'handlebars/runtime';

import { HttpClient } from '../HttpClient';
import { defaultPartials } from './defaultPartials';
import { defaultTemplates } from './defaultTemplates';
import { PartialsEnum } from './PartialsEnum';
import { registerHandlebarHelpers } from './registerHandlebarHelpers';
import { TemplatesEnum } from './TemplatesEnum';

export interface Templates {
    index: Handlebars.TemplateDelegate;
    client: Handlebars.TemplateDelegate;
    exports: {
        model: Handlebars.TemplateDelegate;
        schema: Handlebars.TemplateDelegate;
        service: Handlebars.TemplateDelegate;
    };
    core: {
        settings: Handlebars.TemplateDelegate;
        apiError: Handlebars.TemplateDelegate;
        apiRequestOptions: Handlebars.TemplateDelegate;
        authenticationManager: Handlebars.TemplateDelegate;
        apiResult: Handlebars.TemplateDelegate;
        cancelablePromise: Handlebars.TemplateDelegate;
        request: Handlebars.TemplateDelegate;
        baseHttpRequest: Handlebars.TemplateDelegate;
        httpRequest: Handlebars.TemplateDelegate;
    };
}

export interface TemplatesOverwrite extends Partial<Record<TemplatesEnum, HandlebarsTemplateDelegate | string>> {}
export interface PartialsOverwrite
    extends Partial<Record<PartialsEnum | string, HandlebarsTemplateDelegate | string>> {}

const getTemplate = (
    index: PartialsEnum | TemplatesEnum | string,
    templates: Partial<Record<PartialsEnum | TemplatesEnum | string, TemplateSpecification | string>>
): HandlebarsTemplateDelegate => {
    const template = Object.entries(templates).find(([key]) => key === index)?.[1];
    if (!template) {
        throw new Error(`Template ${index} not found`);
    }

    if (typeof template === 'string') {
        return Handlebars.template(evalPrecompiledTemplate(precompile(template)));
    } else {
        return Handlebars.template(template);
    }
};
/**
 * Read all the Handlebar templates that we need and return on wrapper object
 * so we can easily access the templates in out generator / write functions.
 */
export const registerHandlebarTemplates = (root: {
    httpClient: HttpClient;
    useOptions: boolean;
    useUnionTypes: boolean;
    templatesOverride: TemplatesOverwrite;
    partialsOverride: PartialsOverwrite;
}): Templates => {
    const templatesOverride = root.templatesOverride ?? {};
    const partialsOverride = root.partialsOverride ?? {};
    const allTemplates = {
        ...defaultTemplates,
        ...templatesOverride,
    };
    const allPartials = {
        ...defaultPartials,
        ...partialsOverride,
    };
    registerHandlebarHelpers(root);

    // Partials for the generations of the models, services, etc.
    const keys = Object.keys(allPartials);

    keys.forEach(key => {
        Handlebars.registerPartial(key, getTemplate(key, allPartials));
    });

    // Main templates (entry points for the files we write to disk)
    const templates: Templates = {
        index: getTemplate(TemplatesEnum.index, allTemplates),
        client: getTemplate(TemplatesEnum.client, allTemplates),
        exports: {
            model: getTemplate(TemplatesEnum.exportModel, allTemplates),
            schema: getTemplate(TemplatesEnum.exportSchema, allTemplates),
            service: getTemplate(TemplatesEnum.exportService, allTemplates),
        },
        core: {
            settings: getTemplate(TemplatesEnum.coreSettings, allTemplates),
            apiError: getTemplate(TemplatesEnum.coreApiError, allTemplates),
            apiRequestOptions: getTemplate(TemplatesEnum.coreApiRequestOptions, allTemplates),
            authenticationManager: getTemplate(TemplatesEnum.coreAuthenticationManager, allTemplates),
            apiResult: getTemplate(TemplatesEnum.coreApiResult, allTemplates),
            cancelablePromise: getTemplate(TemplatesEnum.coreCancelablePromise, allTemplates),
            request: getTemplate(TemplatesEnum.coreRequest, allTemplates),
            baseHttpRequest: getTemplate(TemplatesEnum.coreBaseHttpRequest, allTemplates),
            httpRequest: getTemplate(TemplatesEnum.coreHttpRequest, allTemplates),
        },
    };

    return templates;
};

const evalPrecompiledTemplate = (specification: TemplateSpecification) => {
    return eval('(' + specification + ');');
};
