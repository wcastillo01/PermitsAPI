export default interface Permit {
  permitId: number;
  empName: string;
  empLastName: string;
  permitTypeId: number;
  permitType: PermitType;
  permitDate: Date;
}

interface PermitType {
  permitTypeId: number;
  permitTypeName: string;
}

export interface PermitDTO {
  permitId: number;
  empName: string;
  empLastName: string;
  permitTypeId: number;
  permitDescription: string;
  permitDate: string;
}
