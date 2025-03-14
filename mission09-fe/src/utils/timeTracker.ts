import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 로케일 추가

// 플러그인 활성화
dayjs.extend(relativeTime);

// 한국어 로케일 설정
dayjs.locale("ko");

export default function timeTracker(dateString: Date): string {
  const date = dayjs(dateString);
  const now = dayjs();

  const diffInSeconds = now.diff(date, "second");
  if (diffInSeconds < 60) return `${diffInSeconds}초 전`;

  const diffInMinutes = now.diff(date, "minute");
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;

  const diffInHours = now.diff(date, "hour");
  if (diffInHours < 24) return `${diffInHours}시간 전`;

  const diffInDays = now.diff(date, "day");
  if (diffInDays < 365) return `${diffInDays}일 전`;

  const diffInYears = now.diff(date, "year");
  return `${diffInYears}년 전`;
}
