export interface LegacyQuestion {
  id: number | string;
  level: string;
  section: string;
  type: string;
  question: string;
  passage?: string;
  highlight?: string;
  audioUrl?: string;
  imageUrl?: string;
  options: (string | { text: string; img: string })[];
  correct: number;
  explanation: string;
  isImageOption?: boolean;
  mondai?: number;
  number?: number;
}

export const choukaiN4A: LegacyQuestion[] = [
  {
    "id": "n4_listening_a_m1_q01",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "1番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_02.mp3",
    "imageUrl": "/images/choukaiN4/m1_q1.png",
    "mondai": 1,
    "number": 1
  },
  {
    "id": "n4_listening_a_m1_q02",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "2番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_03.mp3",
    "imageUrl": "/images/choukaiN4/m1_q2.png",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "n4_listening_a_m1_q03",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "3番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_04.mp3",
    "imageUrl": "/images/choukaiN4/m1_q3.png",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "n4_listening_a_m1_q04",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "4番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_05.mp3",
    "imageUrl": "/images/choukaiN4/m1_q4.png",
    "mondai": 1,
    "number": 4
  },
  {
    "id": "n4_listening_a_m1_q05",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "5番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_06.mp3",
    "imageUrl": "/images/choukaiN4/m1_q5.png",
    "mondai": 1,
    "number": 5
  },
  {
    "id": "n4_listening_a_m1_q06",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "6番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_07.mp3",
    "imageUrl": "/images/choukaiN4/m1_q6.png",
    "mondai": 1,
    "number": 6
  },
  {
    "id": "n4_listening_a_m1_q07",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "7番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_08.mp3",
    "imageUrl": "/images/choukaiN4/m1_q7.png",
    "mondai": 1,
    "number": 7
  },
  {
    "id": "n4_listening_a_m1_q08",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "8番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_09.mp3",
    "imageUrl": "/images/choukaiN4/m1_q8.png",
    "mondai": 1,
    "number": 8
  },
  {
    "id": "n4_listening_a_m2_q01",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "9番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_11.mp3",
    "imageUrl": "/images/choukaiN4/m2_q1.png",
    "mondai": 2,
    "number": 9
  },
  {
    "id": "n4_listening_a_m2_q02",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "10番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_12.mp3",
    "imageUrl": "/images/choukaiN4/m2_q2.png",
    "mondai": 2,
    "number": 10
  },
  {
    "id": "n4_listening_a_m2_q03",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "11番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_13.mp3",
    "imageUrl": "/images/choukaiN4/m2_q3.png",
    "mondai": 2,
    "number": 11
  },
  {
    "id": "n4_listening_a_m2_q04",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "12番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_14.mp3",
    "imageUrl": "/images/choukaiN4/m2_q4.png",
    "mondai": 2,
    "number": 12
  },
  {
    "id": "n4_listening_a_m2_q05",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "13番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_15.mp3",
    "imageUrl": "/images/choukaiN4/m2_q5.png",
    "mondai": 2,
    "number": 13
  },
  {
    "id": "n4_listening_a_m2_q06",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "14番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_16.mp3",
    "imageUrl": "/images/choukaiN4/m2_q6.png",
    "mondai": 2,
    "number": 14
  },
  {
    "id": "n4_listening_a_m2_q07",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "15番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_17.mp3",
    "imageUrl": "/images/choukaiN4/m2_q7.png",
    "mondai": 2,
    "number": 15
  },
  {
    "id": "n4_listening_a_m3_q01",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "16番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_19.mp3",
    "imageUrl": "/images/choukaiN4/m3_q1.png",
    "mondai": 3,
    "number": 16
  },
  {
    "id": "n4_listening_a_m3_q02",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "17番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_20.mp3",
    "imageUrl": "/images/choukaiN4/m3_q2.png",
    "mondai": 3,
    "number": 17
  },
  {
    "id": "n4_listening_a_m3_q03",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "18番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_21.mp3",
    "imageUrl": "/images/choukaiN4/m3_q3.png",
    "mondai": 3,
    "number": 18
  },
  {
    "id": "n4_listening_a_m3_q04",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "19番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_22.mp3",
    "imageUrl": "/images/choukaiN4/m3_q4.png",
    "mondai": 3,
    "number": 19
  },
  {
    "id": "n4_listening_a_m3_q05",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "20番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_23.mp3",
    "imageUrl": "/images/choukaiN4/m3_q5.png",
    "mondai": 3,
    "number": 20
  },
  {
    "id": "n4_listening_a_m4_q01",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "21番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_25.mp3",
    "mondai": 4,
    "number": 21
  },
  {
    "id": "n4_listening_a_m4_q02",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "22番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_26.mp3",
    "mondai": 4,
    "number": 22
  },
  {
    "id": "n4_listening_a_m4_q03",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "23番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_27.mp3",
    "mondai": 4,
    "number": 23
  },
  {
    "id": "n4_listening_a_m4_q04",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "24番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_28.mp3",
    "mondai": 4,
    "number": 24
  },
  {
    "id": "n4_listening_a_m4_q05",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "25番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_29.mp3",
    "mondai": 4,
    "number": 25
  },
  {
    "id": "n4_listening_a_m4_q06",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "26番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_30.mp3",
    "mondai": 4,
    "number": 26
  },
  {
    "id": "n4_listening_a_m4_q07",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "27番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_31.mp3",
    "mondai": 4,
    "number": 27
  },
  {
    "id": "n4_listening_a_m4_q08",
    "level": "N4",
    "section": "Listening",
    "type": "audio-listening",
    "question": "28番：Dengarkan audio dan pilih jawaban yang paling tepat.",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "Dengarkan audio untuk mengetahui penjelasan yang benar.",
    "audioUrl": "/audio/super_moshi_n4_track_32.mp3",
    "mondai": 4,
    "number": 28
  }
];
