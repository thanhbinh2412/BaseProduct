export class ApiUrls{
    static readonly apiLogin: string = "api/login";
}

export class ApiResultCode{
    static readonly Success: number = 0;
    static readonly Error: number = 1;
    static readonly Warning: number = 2;
    static readonly UnAuthorized: number = 401;
}

export class DefaultMessage{
    static readonly msgGetDataErrorNotFound: string = "Không tìm thấy dữ liệu";
    static msgGetDataErrorNotFoundWithName: string = "Không tìm thấy dữ liệu";
    static readonly msgGetDataSuccess: string = "Lấy dữ liệu thành công";
    static readonly msgUpdateSuccess: string = "Cập nhật dữ liệu thành công";
    static readonly msgUpdateError: string = "Cập nhật dữ liệu thất bại";
    static readonly msgUnAuthorize: string = "UnAuthorized";
}

export class DefaultDateTimeFormat{
    static readonly VNDateCommonFormat: string = "dd/MM/yyyy";

}