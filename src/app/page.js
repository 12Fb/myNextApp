"use client";

import "@/Global/instance";
import { useEffect, useState } from "react";
export default function Home() {
  const [nowDate, setDate] = useState(new Date().toLocaleString());
  useEffect(() => {
    let timer = setInterval(() => {
      const date = new Date(); // 获取当前时间
      // 使用 Intl.DateTimeFormat 格式化日期和时间，指定时区为“Asia/Shanghai”（北京时间）
      const formattedDateTime = new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Shanghai",
      }).format(date);
      setDate(formattedDateTime.toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div suppressHydrationWarning>{nowDate}</div>
    </>
  );
}
