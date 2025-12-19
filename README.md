# Poker God - GTO Strategy Assistant ♠️♥️♣️♦️

Poker God 是一個專為德州撲克玩家設計的輕量級單頁應用程式 (SPA)。
它結合了動態 GTO 範圍圖表與即時決策建議，協助玩家在錦標賽 (MTT) 與現金桌 (Cash Game) 中做出數學期望值 (EV) 最高的決策。

## 🚀 線上試用 (Live Demo)
[點擊這裡開啟 Poker God] (https://andreww0421.github.io/poker_god/)

## ✨ 核心功能
* **動態範圍熱力圖 (Dynamic Heatmap)**：視覺化呈現 13x13 起手牌矩陣。
* **情境感知 (Context Aware)**：根據 6-Max/Full Ring、位置 (Position)、籌碼深度 (Stack Depth) 自動調整策略。
* **雙模式支援**：
    * **MTT 模式**：包含短碼 Push/Fold Nash 均衡策略。
    * **Cash 模式**：針對 Rake 環境調整的標準 RFI 範圍。
* **四色牌顯示**：專業玩家友善的 UI 設計。
* **離線可用**：基於 LocalStorage 技術，設定自動儲存，無須後端伺服器。

## 🛠 技術堆疊
* HTML5 / CSS3 (Responsive Grid Layout)
* Vanilla JavaScript (No Frameworks required)
* Heuristic GTO Logic Engine

## 📱 使用方式
1.  選擇賽制與人數。
2.  設定你的位置與當前 BB 數。
3.  點擊選擇手牌，查看熱力圖建議（紅色為加注，黃色為混合/跟注，灰色為棄牌）。

---
*Created by Andre Wen*
