
// ملف script.js

// تغيير الوضع عند التبديل


// script.js

// الانتظار لمدة 8 ثوانٍ (8000 ميلي ثانية)
window.onload = function() {
  setTimeout(function() {
      // إخفاء الـ loader بعد 8 ثوانٍ
      document.getElementById("loader").style.display = "none";
      // عرض الصفحة الرئيسية بعد 8 ثوانٍ مع تأثير الأنيميشن
      document.getElementById("content").style.display = "block";
  }, 8000); // 8 ثوانٍ (8000 ميلي ثانية)
};

"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
// ملف script.js


export function BackgroundBoxesDemo() {
  return (
    (<div
      className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>)
  );
}
// ملف script.js

// تغيير الوضع عند التبديل
const modeSwitch = document.getElementById('modeSwitch');
const body = document.body;

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode'); // التبديل إلى الوضع الفاتح
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode'); // التبديل إلى الوضع الداكن
  }
});
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines>)
  );
}


"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    (<div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}>
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]} />
    </div>)
  );
}



module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0D6EFD",
                    foreground: "#FFFFFF"
                },
                secondary: {
                    DEFAULT: "#F0F1F3",
                    foreground: "#020817"
                },
                accent: {
                    DEFAULT: "#6D7074",
                    foreground: "#020817"
                },
                background: "#FAFAFB",
                foreground: "#020817",
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#020817"
                },
                popover: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#020817"
                },
                muted: {
                    DEFAULT: "#F0F1F3",
                    foreground: "#6D7074"
                },
                destructive: {
                    DEFAULT: "#FF4C4C",
                    foreground: "#FFFFFF"
                },
                border: "#E0E0E0",
                input: "#E0E0E0",
                ring: "#0D6EFD",
                chart: {
                    1: "#FF6F61",
                    2: "#4CAF50",
                    3: "#03A9F4",
                    4: "#FFC107",
                    5: "#8E44AD"
                },
                dark: {
                    primary: {
                        DEFAULT: "#0D6EFD",
                        foreground: "#FFFFFF"
                    },
                    secondary: {
                        DEFAULT: "#1E1E2C",
                        foreground: "#FAFAFB"
                    },
                    accent: {
                        DEFAULT: "#6D7074",
                        foreground: "#FAFAFB"
                    },
                    background: "#020817",
                    foreground: "#FAFAFB",
                    card: {
                        DEFAULT: "#121212",
                        foreground: "#FAFAFB"
                    },
                    popover: {
                        DEFAULT: "#121212",
                        foreground: "#FAFAFB"
                    },
                    muted: {
                        DEFAULT: "#1E1E2C",
                        foreground: "#6D7074"
                    },
                    destructive: {
                        DEFAULT: "#FF4C4C",
                        foreground: "#FFFFFF"
                    },
                    border: "#3C3C3C",
                    input: "#3C3C3C",
                    ring: "#0D6EFD"
                }
            },
            borderRadius: {
                sm: '0.125rem'
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            },
            fontSize: {
                heading: '36px',
                body: '14px'
            },
            fontWeight: {
                heading: '700',
                body: '600'
            }
        },
    },
    plugins: [],
    darkMode: "class",
    }
    module.exports = {
      content: [
          "./src/**/*.{js,jsx,ts,tsx,html}",
      ],
      theme: {
          extend: {
              colors: {
                  primary: {
                      DEFAULT: "#0D6EFD",
                      foreground: "#FFFFFF"
                  },
                  secondary: {
                      DEFAULT: "#F0F1F3",
                      foreground: "#020817"
                  },
                  accent: {
                      DEFAULT: "#6D7074",
                      foreground: "#020817"
                  },
                  background: "#FAFAFB",
                  foreground: "#020817",
                  card: {
                      DEFAULT: "#FFFFFF",
                      foreground: "#020817"
                  },
                  popover: {
                      DEFAULT: "#FFFFFF",
                      foreground: "#020817"
                  },
                  muted: {
                      DEFAULT: "#F0F1F3",
                      foreground: "#6D7074"
                  },
                  destructive: {
                      DEFAULT: "#FF4C4C",
                      foreground: "#FFFFFF"
                  },
                  border: "#E0E0E0",
                  input: "#E0E0E0",
                  ring: "#0D6EFD",
                  chart: {
                      1: "#FF6F61",
                      2: "#4CAF50",
                      3: "#03A9F4",
                      4: "#FFC107",
                      5: "#8E44AD"
                  },
                  dark: {
                      primary: {
                          DEFAULT: "#0D6EFD",
                          foreground: "#FFFFFF"
                      },
                      secondary: {
                          DEFAULT: "#1E1E2C",
                          foreground: "#FAFAFB"
                      },
                      accent: {
                          DEFAULT: "#6D7074",
                          foreground: "#FAFAFB"
                      },
                      background: "#020817",
                      foreground: "#FAFAFB",
                      card: {
                          DEFAULT: "#121212",
                          foreground: "#FAFAFB"
                      },
                      popover: {
                          DEFAULT: "#121212",
                          foreground: "#FAFAFB"
                      },
                      muted: {
                          DEFAULT: "#1E1E2C",
                          foreground: "#6D7074"
                      },
                      destructive: {
                          DEFAULT: "#FF4C4C",
                          foreground: "#FFFFFF"
                      },
                      border: "#3C3C3C",
                      input: "#3C3C3C",
                      ring: "#0D6EFD"
                  }
              },
              borderRadius: {
                  sm: '0.125rem'
              },
              boxShadow: {
                  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
              },
              fontFamily: {
                  inter: ['Inter', 'sans-serif']
              },
              fontSize: {
                  heading: '36px',
                  body: '14px'
              },
              fontWeight: {
                  heading: '700',
                  body: '600'
              }
          },
      },
      plugins: [],
      darkMode: "class",
      }