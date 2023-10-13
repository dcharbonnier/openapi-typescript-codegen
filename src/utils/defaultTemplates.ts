import templateClient from '../templates/client.hbs';
import templateCoreApiError from '../templates/core/ApiError.hbs';
import templateCoreApiRequestOptions from '../templates/core/ApiRequestOptions.hbs';
import templateCoreApiResult from '../templates/core/ApiResult.hbs';
import templateCoreBaseHttpRequest from '../templates/core/BaseHttpRequest.hbs';
import templateCancelablePromise from '../templates/core/CancelablePromise.hbs';
import templateCoreHttpRequest from '../templates/core/HttpRequest.hbs';
import templateCoreSettings from '../templates/core/OpenAPI.hbs';
import templateCoreRequest from '../templates/core/request.hbs';
import templateExportModel from '../templates/exportModel.hbs';
import templateExportSchema from '../templates/exportSchema.hbs';
import templateExportService from '../templates/exportService.hbs';
import templateIndex from '../templates/index.hbs';
import { TemplatesEnum } from './TemplatesEnum';

export const defaultTemplates: Record<TemplatesEnum, TemplateSpecification> = {
    [TemplatesEnum['index']]: templateIndex,
    [TemplatesEnum['client']]: templateClient,
    [TemplatesEnum['exportModel']]: templateExportModel,
    [TemplatesEnum['exportSchema']]: templateExportSchema,
    [TemplatesEnum['exportService']]: templateExportService,
    [TemplatesEnum['coreSettings']]: templateCoreSettings,
    [TemplatesEnum['coreApiError']]: templateCoreApiError,
    [TemplatesEnum['coreApiRequestOptions']]: templateCoreApiRequestOptions,
    [TemplatesEnum['coreApiResult']]: templateCoreApiResult,
    [TemplatesEnum['coreCancelablePromise']]: templateCancelablePromise,
    [TemplatesEnum['coreRequest']]: templateCoreRequest,
    [TemplatesEnum['coreBaseHttpRequest']]: templateCoreBaseHttpRequest,
    [TemplatesEnum['coreHttpRequest']]: templateCoreHttpRequest,
};
