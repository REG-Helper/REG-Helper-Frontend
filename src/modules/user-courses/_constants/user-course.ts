import type { GetRemainingUserCoursesResponse } from '../_types';

export const courseCategoryMapping = new Map<
  keyof GetRemainingUserCoursesResponse,
  string
>([
  ['gedEdFundamental', 'หมวดศึกษาทั่วไป วิชาพื้นฐาน'],
  ['genEdLanguageCommunication', 'หมวดศึกษาทั่วไป วิชาด้านภาษาและการสื่อสาร'],
  ['genEdFacultySpecific', 'หมวดศึกษาทั่วไป วิชาตามเกณฑ์ของคณะ'],
  ['gendEdElective', 'หมวดศึกษาทั่วไป วิชาเลือก'],
  ['specificCore', 'หมวดวิชาเฉพาะ วิชาแกน'],
  ['specificReq', 'หมวดวิชาเฉพาะ วิชาบังคับ'],
  ['specificElectiveReq', 'หมวดวิชาเฉพาะ วิชาบังคับเลือก'],
  ['specificAltStudy', 'หมวดวิชาเฉพาะ วิชาศึกษาทางเลือก'],
  ['specificMajorElective', 'หมวดวิชาเฉพาะ วิชาเลือกเฉพาะสาขา'],
  ['freeElective', 'หมวดวิชาเลือกเสรี'],
]);
