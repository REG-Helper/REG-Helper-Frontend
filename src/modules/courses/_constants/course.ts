import { CourseGroup, CourseSubGroup } from '../_enums';

export const CourseGroupMapper = new Map([
  [CourseGroup.FREE_ELEC, 'วิชาเลือกเสรี'],
  [CourseGroup.GENED, 'วิชาศึกษาทั่วไป'],
  [CourseGroup.SPEC, 'วิชาเฉพาะ'],
]);

export const CourseSubGroupMapper = new Map([
  [CourseSubGroup.FREE_ELEC, 'วิชาเลือกเสรี'],
  [CourseSubGroup.FUND, 'วิชาพื้นฐาน'],
  [CourseSubGroup.LANG, 'วิชาด้านภาษาและการสื่อสาร'],
  [CourseSubGroup.FAC_SPEC, 'วิชาตามเกณฑ์ของคณะ'],
  [CourseSubGroup.GENED_ELEC, 'วิชาเลือก'],
  [CourseSubGroup.CORE, 'วิชาแกน'],
  [CourseSubGroup.REQUIRED, 'วิชาบังคับเฉพาะด้าน'],
  [CourseSubGroup.ELEC_REQ, 'วิชาบังคับเลือก'],
  [CourseSubGroup.ALT_STUDY, 'วิชาการศึกษาทางเลือก'],
  [CourseSubGroup.MAJOR_ELEC, 'วิชาเลือกเฉพาะสาขา'],
]);

export const SET_SEARCH_TERM_DELAY = 500; // 0.5 s