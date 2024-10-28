'use client';

import { Checkbox } from '@/shared/components/ui/checkbox';
import { CourseWithSubGroupMapper, THAI_DAYS } from './_constants';
import { Label } from '@/shared/components/ui/label';
import { useState } from 'react';

export function CourseFilter() {
  const [selectedCourses, setSelectedCourses] = useState(new Set());
  const [selectedDays, setSelectedDays] = useState(new Set());

  const handleCourseChange = (courseGroup: string, subGroup: string) => {
    const newSelectedCourses = new Set(selectedCourses);
    const key = `${courseGroup}-${subGroup}`;
    if (newSelectedCourses.has(key)) {
      newSelectedCourses.delete(key);
    } else {
      newSelectedCourses.add(key);
    }
    setSelectedCourses(newSelectedCourses);
    console.log(selectedCourses);
  };

  const handleDayChange = (key: string) => {
    const newSelectedDays = new Set(selectedDays);
    if (newSelectedDays.has(key)) {
      newSelectedDays.delete(key);
    } else {
      newSelectedDays.add(key);
    }
    setSelectedDays(newSelectedDays);

    console.log(selectedDays);
  };
  return (
    <div>
      <div className="flex flex-col gap-3">
        <p>กลุ่มวิชา</p>
        {Array.from(CourseWithSubGroupMapper.entries()).map(
          ([courseGroup, courseData], index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{courseData.courseName}</p>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {Array.from(courseData.subCourses.entries()).map(
                  ([subGroup, subGroupName], idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${courseGroup}-${subGroup}`}
                        onChange={() =>
                          handleCourseChange(courseGroup, subGroup)
                        }
                      />
                      <Label htmlFor={`${courseGroup}-${subGroup}`}>
                        {subGroupName}
                      </Label>
                    </div>
                  ),
                )}
              </div>
            </div>
          ),
        )}
      </div>
      <div className="flex flex-col gap-3">
        <p>วัน</p>
        {Array.from(THAI_DAYS.entries()).map(([key, day], index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox id={key} onChange={() => handleDayChange(key)} />
            <Label htmlFor={key}>{day}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
