import React, { useState } from "react";
import "./App.css";

export default function CalendarApp() {
  const today = new Date();

  /* ================= 상태 ================= */
  const [currentDate, setCurrentDate] = useState(today); // 현재 보고 있는 달
  const [selectedDate, setSelectedDate] = useState(today); // 선택한 날짜
  const [input, setInput] = useState(""); // 입력값
  const [events, setEvents] = useState([]); // 전체 일정

  /* ================= 날짜 정보 ================= */
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  /* ================= 달 이동 ================= */
  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  /* ================= 달력 생성 ================= */
  const firstDay = new Date(year, month, 1).getDay(); // 시작 요일
  const lastDate = new Date(year, month + 1, 0).getDate(); // 마지막 날짜

  const dates = [];

  // 앞쪽 빈칸
  for (let i = 0; i < firstDay; i++) dates.push(null);

  // 날짜 채우기
  for (let d = 1; d <= lastDate; d++) dates.push(d);

  // 뒤쪽 빈칸
  while (dates.length % 7 !== 0) dates.push(null);

  // 주 단위로 자르기
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  /* ================= 날짜 관련 함수 ================= */
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const isSameDate = (a, b) => formatDate(a) === formatDate(b);

  const handleDateClick = (day) => {
    if (!day) return;
    setSelectedDate(new Date(year, month, day));
  };

  const selectedDateKey = formatDate(selectedDate);

  /* ================= 일정 관리 ================= */
  const addEvent = () => {
    if (!input.trim()) return;

    const newEvent = {
      id: Date.now(),
      date: selectedDateKey,
      text: input,
      done: false,
    };

    setEvents([...events, newEvent]);
    setInput("");
  };

  const toggleDone = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, done: !event.done } : event
      )
    );
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  /* ================= 유틸 ================= */
  // 날짜별 그룹화
  const groupedEvents = events.reduce((groups, event) => {
    if (!groups[event.date]) groups[event.date] = [];
    groups[event.date].push(event);
    return groups;
  }, {});

  // 달력에 점 표시 여부
  const hasEvent = (day) => {
    if (!day) return false;
    const key = formatDate(new Date(year, month, day));
    return events.some((event) => event.date === key);
  };

  /* ================= UI ================= */
  return (
    <div className="app">
      <h1 className="title">이현학의 일정관리 앱</h1>

      <div className="layout">
        {/* ===== 왼쪽: 달력 ===== */}
        <section className="left-panel">
          <div className="calendar-header">
            <button onClick={() => changeMonth(-1)}>◀</button>
            <h2>{year}년 {month + 1}월</h2>
            <button onClick={() => changeMonth(1)}>▶</button>
          </div>

          <table className="calendar-table">
            <thead>
              <tr>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {weeks.map((week, i) => (
                <tr key={i}>
                  {week.map((day, j) => {
                    const cellDate = day
                      ? new Date(year, month, day)
                      : null;

                    const isToday =
                      cellDate && isSameDate(cellDate, today);

                    const isSelected =
                      cellDate && isSameDate(cellDate, selectedDate);

                    return (
                      <td
                        key={j}
                        onClick={() => handleDateClick(day)}
                        className={`
                          ${day ? "clickable" : ""}
                          ${isToday ? "today" : ""}
                          ${isSelected ? "selected" : ""}
                        `}
                      >
                        {day && <span>{day}</span>}
                        {hasEvent(day) && <div className="event-dot" />}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* 일정 입력 */}
          <div className="input-box">
            <h3>선택 날짜: {selectedDateKey}</h3>

            <div className="input-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addEvent()}
                placeholder="일정을 입력하세요"
              />
              <button onClick={addEvent}>추가</button>
              <button onClick={() => setInput("")}>다시</button>
            </div>
          </div>
        </section>

        {/* ===== 오른쪽: 일정 ===== */}
        <section className="right-panel">
          <h2>입력한 일정</h2>

          {events.length === 0 ? (
            <p className="empty">등록된 일정이 없습니다.</p>
          ) : (
            Object.entries(groupedEvents).map(([date, dateEvents]) => (
              <div key={date} className="date-group">
                <h3 className="date-title">{date}</h3>

                <ul className="event-list">
                  {dateEvents.map((event) => (
                    <li key={event.id} className="event-item">
                      <button
                        className={
                          event.done
                            ? "check-btn checked"
                            : "check-btn"
                        }
                        onClick={() => toggleDone(event.id)}
                      >
                        {event.done ? "✓" : ""}
                      </button>

                      <div className="event-content">
                        <p className={event.done ? "done-text" : ""}>
                          {event.text}
                        </p>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => deleteEvent(event.id)}
                      >
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}