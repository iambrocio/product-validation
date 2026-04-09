"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function MixpanelInit() {
  useEffect(() => {
    mixpanel.init("f42615c6ce84cc525fde94af1de7c8bb", {
      autocapture: true,
      record_sessions_percent: 100,
    });
  }, []);

  return null;
}
