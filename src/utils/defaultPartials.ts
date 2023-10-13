import angularGetHeaders from '../templates/core/angular/getHeaders.hbs';
import angularGetRequestBody from '../templates/core/angular/getRequestBody.hbs';
import angularGetResponseBody from '../templates/core/angular/getResponseBody.hbs';
import angularGetResponseHeader from '../templates/core/angular/getResponseHeader.hbs';
import angularRequest from '../templates/core/angular/request.hbs';
import angularSendRequest from '../templates/core/angular/sendRequest.hbs';
import axiosGetHeaders from '../templates/core/axios/getHeaders.hbs';
import axiosGetRequestBody from '../templates/core/axios/getRequestBody.hbs';
import axiosGetResponseBody from '../templates/core/axios/getResponseBody.hbs';
import axiosGetResponseHeader from '../templates/core/axios/getResponseHeader.hbs';
import axiosRequest from '../templates/core/axios/request.hbs';
import axiosSendRequest from '../templates/core/axios/sendRequest.hbs';
import fetchGetHeaders from '../templates/core/fetch/getHeaders.hbs';
import fetchGetRequestBody from '../templates/core/fetch/getRequestBody.hbs';
import fetchGetResponseBody from '../templates/core/fetch/getResponseBody.hbs';
import fetchGetResponseHeader from '../templates/core/fetch/getResponseHeader.hbs';
import fetchRequest from '../templates/core/fetch/request.hbs';
import fetchSendRequest from '../templates/core/fetch/sendRequest.hbs';
import functionsBase64 from '../templates/core/functions/base64.hbs';
import functionsCatchErrorCodes from '../templates/core/functions/catchErrorCodes.hbs';
import functionsGetFormData from '../templates/core/functions/getFormData.hbs';
import functionsGetQueryString from '../templates/core/functions/getQueryString.hbs';
import functionsGetUrl from '../templates/core/functions/getUrl.hbs';
import functionsIsBlob from '../templates/core/functions/isBlob.hbs';
import functionsIsDefined from '../templates/core/functions/isDefined.hbs';
import functionsIsFormData from '../templates/core/functions/isFormData.hbs';
import functionsIsString from '../templates/core/functions/isString.hbs';
import functionsIsStringWithValue from '../templates/core/functions/isStringWithValue.hbs';
import functionsIsSuccess from '../templates/core/functions/isSuccess.hbs';
import functionsResolve from '../templates/core/functions/resolve.hbs';
import nodeGetHeaders from '../templates/core/node/getHeaders.hbs';
import nodeGetRequestBody from '../templates/core/node/getRequestBody.hbs';
import nodeGetResponseBody from '../templates/core/node/getResponseBody.hbs';
import nodeGetResponseHeader from '../templates/core/node/getResponseHeader.hbs';
import nodeRequest from '../templates/core/node/request.hbs';
import nodeSendRequest from '../templates/core/node/sendRequest.hbs';
import xhrGetHeaders from '../templates/core/xhr/getHeaders.hbs';
import xhrGetRequestBody from '../templates/core/xhr/getRequestBody.hbs';
import xhrGetResponseBody from '../templates/core/xhr/getResponseBody.hbs';
import xhrGetResponseHeader from '../templates/core/xhr/getResponseHeader.hbs';
import xhrRequest from '../templates/core/xhr/request.hbs';
import xhrSendRequest from '../templates/core/xhr/sendRequest.hbs';
import partialBase from '../templates/partials/base.hbs';
import partialExportComposition from '../templates/partials/exportComposition.hbs';
import partialExportEnum from '../templates/partials/exportEnum.hbs';
import partialExportInterface from '../templates/partials/exportInterface.hbs';
import partialExportType from '../templates/partials/exportType.hbs';
import partialHeader from '../templates/partials/header.hbs';
import partialIsNullable from '../templates/partials/isNullable.hbs';
import partialIsReadOnly from '../templates/partials/isReadOnly.hbs';
import partialIsRequired from '../templates/partials/isRequired.hbs';
import partialParameters from '../templates/partials/parameters.hbs';
import partialResult from '../templates/partials/result.hbs';
import partialSchema from '../templates/partials/schema.hbs';
import partialSchemaArray from '../templates/partials/schemaArray.hbs';
import partialSchemaComposition from '../templates/partials/schemaComposition.hbs';
import partialSchemaDictionary from '../templates/partials/schemaDictionary.hbs';
import partialSchemaEnum from '../templates/partials/schemaEnum.hbs';
import partialSchemaGeneric from '../templates/partials/schemaGeneric.hbs';
import partialSchemaInterface from '../templates/partials/schemaInterface.hbs';
import partialType from '../templates/partials/type.hbs';
import partialTypeArray from '../templates/partials/typeArray.hbs';
import partialTypeDictionary from '../templates/partials/typeDictionary.hbs';
import partialTypeEnum from '../templates/partials/typeEnum.hbs';
import partialTypeGeneric from '../templates/partials/typeGeneric.hbs';
import partialTypeInterface from '../templates/partials/typeInterface.hbs';
import partialTypeIntersection from '../templates/partials/typeIntersection.hbs';
import partialTypeReference from '../templates/partials/typeReference.hbs';
import partialTypeUnion from '../templates/partials/typeUnion.hbs';
import { PartialsEnum } from './PartialsEnum';

export const defaultPartials: Record<PartialsEnum, TemplateSpecification> = {
    [PartialsEnum.exportEnum]: partialExportEnum,
    [PartialsEnum.exportInterface]: partialExportInterface,
    [PartialsEnum.exportComposition]: partialExportComposition,
    [PartialsEnum.exportType]: partialExportType,
    [PartialsEnum.header]: partialHeader,
    [PartialsEnum.isNullable]: partialIsNullable,
    [PartialsEnum.isReadOnly]: partialIsReadOnly,
    [PartialsEnum.isRequired]: partialIsRequired,
    [PartialsEnum.parameters]: partialParameters,
    [PartialsEnum.result]: partialResult,
    [PartialsEnum.schema]: partialSchema,
    [PartialsEnum.schemaArray]: partialSchemaArray,
    [PartialsEnum.schemaComposition]: partialSchemaComposition,
    [PartialsEnum.schemaDictionary]: partialSchemaDictionary,
    [PartialsEnum.schemaEnum]: partialSchemaEnum,
    [PartialsEnum.schemaGeneric]: partialSchemaGeneric,
    [PartialsEnum.schemaInterface]: partialSchemaInterface,
    [PartialsEnum.type]: partialType,
    [PartialsEnum.typeArray]: partialTypeArray,
    [PartialsEnum.typeDictionary]: partialTypeDictionary,
    [PartialsEnum.typeEnum]: partialTypeEnum,
    [PartialsEnum.typeGeneric]: partialTypeGeneric,
    [PartialsEnum.typeInterface]: partialTypeInterface,
    [PartialsEnum.typeIntersection]: partialTypeIntersection,
    [PartialsEnum.typeReference]: partialTypeReference,
    [PartialsEnum.typeUnion]: partialTypeUnion,
    [PartialsEnum.base]: partialBase,
    [PartialsEnum.functionsCatchErrorCodes]: functionsCatchErrorCodes,
    [PartialsEnum.functionsGetFormData]: functionsGetFormData,
    [PartialsEnum.functionsGetQueryString]: functionsGetQueryString,
    [PartialsEnum.functionsGetUrl]: functionsGetUrl,
    [PartialsEnum.functionsIsBlob]: functionsIsBlob,
    [PartialsEnum.functionsIsDefined]: functionsIsDefined,
    [PartialsEnum.functionsIsFormData]: functionsIsFormData,
    [PartialsEnum.functionsIsString]: functionsIsString,
    [PartialsEnum.functionsIsStringWithValue]: functionsIsStringWithValue,
    [PartialsEnum.functionsIsSuccess]: functionsIsSuccess,
    [PartialsEnum.functionsBase64]: functionsBase64,
    [PartialsEnum.functionsResolve]: functionsResolve,
    [PartialsEnum.fetchGetHeaders]: fetchGetHeaders,
    [PartialsEnum.fetchGetRequestBody]: fetchGetRequestBody,
    [PartialsEnum.fetchGetResponseBody]: fetchGetResponseBody,
    [PartialsEnum.fetchGetResponseHeader]: fetchGetResponseHeader,
    [PartialsEnum.fetchSendRequest]: fetchSendRequest,
    [PartialsEnum.fetchRequest]: fetchRequest,
    [PartialsEnum.xhrGetHeaders]: xhrGetHeaders,
    [PartialsEnum.xhrGetRequestBody]: xhrGetRequestBody,
    [PartialsEnum.xhrGetResponseBody]: xhrGetResponseBody,
    [PartialsEnum.xhrGetResponseHeader]: xhrGetResponseHeader,
    [PartialsEnum.xhrSendRequest]: xhrSendRequest,
    [PartialsEnum.xhrRequest]: xhrRequest,
    [PartialsEnum.nodeGetHeaders]: nodeGetHeaders,
    [PartialsEnum.nodeGetRequestBody]: nodeGetRequestBody,
    [PartialsEnum.nodeGetResponseBody]: nodeGetResponseBody,
    [PartialsEnum.nodeGetResponseHeader]: nodeGetResponseHeader,
    [PartialsEnum.nodeSendRequest]: nodeSendRequest,
    [PartialsEnum.nodeRequest]: nodeRequest,
    [PartialsEnum.axiosGetHeaders]: axiosGetHeaders,
    [PartialsEnum.axiosGetRequestBody]: axiosGetRequestBody,
    [PartialsEnum.axiosGetResponseBody]: axiosGetResponseBody,
    [PartialsEnum.axiosGetResponseHeader]: axiosGetResponseHeader,
    [PartialsEnum.axiosSendRequest]: axiosSendRequest,
    [PartialsEnum.axiosRequest]: axiosRequest,
    [PartialsEnum.angularGetHeaders]: angularGetHeaders,
    [PartialsEnum.angularGetRequestBody]: angularGetRequestBody,
    [PartialsEnum.angularGetResponseBody]: angularGetResponseBody,
    [PartialsEnum.angularGetResponseHeader]: angularGetResponseHeader,
    [PartialsEnum.angularSendRequest]: angularSendRequest,
    [PartialsEnum.angularRequest]: angularRequest,
};
