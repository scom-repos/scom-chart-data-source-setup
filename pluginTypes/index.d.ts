/// <amd-module name="@scom/scom-chart-data-source-setup/index.css.ts" />
declare module "@scom/scom-chart-data-source-setup/index.css.ts" {
    export const comboBoxStyle: string;
    export const uploadStyle: string;
}
/// <amd-module name="@scom/scom-chart-data-source-setup/interface.ts" />
declare module "@scom/scom-chart-data-source-setup/interface.ts" {
    export enum ModeType {
        LIVE = "Live",
        SNAPSHOT = "Snapshot"
    }
    export enum DataSource {
        Dune = "Dune"
    }
    export interface IFileData {
        cid?: string;
        name?: string;
    }
    export interface IConfigData {
        mode: ModeType;
        dataSource: DataSource;
        queryId: string;
        file?: IFileData;
        chartData?: string;
    }
}
/// <amd-module name="@scom/scom-chart-data-source-setup/utils.ts" />
declare module "@scom/scom-chart-data-source-setup/utils.ts" {
    import { DataSource, ModeType } from "@scom/scom-chart-data-source-setup/interface.ts";
    export const callAPI: (dataSource: DataSource, queryId: string) => Promise<any>;
    export const getExternalLink: (dataSource: DataSource, queryId: string) => string;
    export const modeOptions: {
        label: string;
        value: ModeType;
    }[];
    export const dataSourceOptions: {
        label: string;
        value: DataSource;
    }[];
    export const fetchContentByCID: (ipfsCid: string) => Promise<any>;
}
/// <amd-module name="@scom/scom-chart-data-source-setup" />
declare module "@scom/scom-chart-data-source-setup" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import "@scom/scom-chart-data-source-setup/index.css.ts";
    import { DataSource, IConfigData, IFileData } from "@scom/scom-chart-data-source-setup/interface.ts";
    import { ModeType } from "@scom/scom-chart-data-source-setup/interface.ts";
    import { callAPI, fetchContentByCID } from "@scom/scom-chart-data-source-setup/utils.ts";
    export { fetchContentByCID, callAPI, ModeType, DataSource };
    interface ScomChartDataElement extends ControlElement {
        mode?: ModeType;
        dataSource?: DataSource;
        queryId?: string;
        file?: IFileData;
        onCustomDataChanged?: (data: IConfigData) => Promise<void>;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-chart-data-source-setup']: ScomChartDataElement;
            }
        }
    }
    export default class ScomChartDataSourceSetup extends Module {
        private _data;
        private modeSelect;
        private comboDataSource;
        private queryIdInput;
        private captureBtn;
        private downloadBtn;
        private mdAlert;
        private fileNameLb;
        private pnlUpload;
        private pnlFile;
        private pnlDataSource;
        private pnlQueryId;
        private pnlLoading;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomChartDataElement, parent?: Container): Promise<ScomChartDataSourceSetup>;
        get data(): IConfigData;
        set data(value: IConfigData);
        get mode(): ModeType;
        set mode(value: ModeType);
        get dataSource(): DataSource;
        set dataSource(value: DataSource);
        get queryId(): string;
        set queryId(value: string);
        get file(): IFileData;
        set file(value: IFileData);
        onCustomDataChanged(data: IConfigData): Promise<void>;
        private renderUI;
        private onModeChanged;
        private onDataSourceChanged;
        private updateMode;
        private updateChartData;
        private onUpdateQueryId;
        private onCapture;
        private onUploadToIPFS;
        private onImportFile;
        private onExportFile;
        openLink(): void;
        init(): void;
        render(): any;
    }
}
