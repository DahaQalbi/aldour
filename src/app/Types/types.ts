import { Type } from "@angular/core";
import { BasicPlanComponent } from "src/app/pages/profile/plans-modal/basic-plan/basic-plan.component";
import { CustomPlanComponent } from "src/app/pages/profile/plans-modal/custom-plan/custom-plan.component";
import { FreePlanComponent } from "src/app/pages/profile/plans-modal/free-plan/free-plan.component";
import { MasterPlanComponent } from "src/app/pages/profile/plans-modal/master-plan/master-plan.component";
import { ProPlanComponent } from "src/app/pages/profile/plans-modal/pro-plan/pro-plan.component";

export type InputTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'submit'
  | 'text'
  | 'time';

export type AlertTypes =
  | 'notification'
  | 'warning'
  | 'wrong'
  | 'info'
  | 'success';


export type PlanComponentTypes =
  Type<BasicPlanComponent> |
  Type<CustomPlanComponent> |
  Type<FreePlanComponent> |
  Type<ProPlanComponent> |
  Type<MasterPlanComponent>


  export type InspectionReportMenuType =
  'viewReport' | 
  'shareReport';


export type AskelaraMenuTypes =
  'exportToDocument' | 
  'selectText';

export type TosterPositionTypes = 
  'top' | 'center' | 'bottom'

export type ButtonTypes = 
  "button" | 
  "submit" 

export type ButtonModes = 
  "primary" | "secondary" 

export type ResponseStatuCodes = 
  200 | 
  201 | 
  400 |
  401 |
  500 | 
  404;