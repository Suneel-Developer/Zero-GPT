"use client"

import * as React from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { ScanResultProps } from '../types/scanResult'

export function ScanResult({
  timestamp,
  confidence,
  aiProbability,
  classification,
  breakdown
}: ScanResultProps) {
  return (
    <div className="relative z-40 w-full min-w-[250px] lg:min-w-[284px]  mx-auto p-6 space-y-2 bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center text-gray-600">
        <h2 className="text-xs font-semibold tracking-tight">MOST RECENT SCAN</h2>
        <span className="text-xs">{new Date(timestamp).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</span>
      </div>

      {/* Classification */}
      <div className="">
        <h3 className="text-xl font-semibold mt-4 pb-3">Classification</h3>
        <p className="text-sm text-gray-600">
          We are <span className="text-blue-600">{confidence}</span>{" "}
          <span className="text-blue-600">confident</span> this text is entirely
        </p>
        <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-800 rounded-md text-base">
          {classification}
        </div>
      </div>

      {/* Circular Progress */}
      <div className="py-3 flex items-start gap-3 justify-between">
        <div className="w-24 h-24">
          <CircularProgressbar
            value={100 - aiProbability}
            text={classification}
            styles={buildStyles({
              textSize: '18px',
              pathColor: '#10B981',
              textColor: '#10B981',
              trailColor: '#E5E7EB',
            })}
          />
        </div>
        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-amber-500">{aiProbability}%</p>
          <p className="text-gray-600 text-sm text-nowrap">Probability AI generated</p>
          <div className="flex items-center gap-2 text-sm text-nowrap">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-gray-600">{confidence} confident</span>
          </div>
        </div>
      </div>

      {/* Probability Breakdown */}
      <div className="pt-5 border-t">
        <h3 className="text-lg font-semibold">Probability breakdown</h3>
        <p className="text-gray-600 text-sm my-2">
          The chance this text is written by a human, AI, or both.
        </p>
        <div className="mt-5 space-y-4">
          <div className="h-4 flex rounded-full overflow-hidden">
            <div
              className="bg-green-400"
              style={{ width: `${breakdown.human}%` }}
            />
            <div
              className="bg-purple-400"
              style={{ width: `${breakdown.mixed}%` }}
            />
            <div
              className="bg-amber-400"
              style={{ width: `${breakdown.ai}%` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center flex-col">
              <p className="text-green-600 font-medium uppercase">human</p>
              <p className="text-lg font-semibold">{breakdown.human}%</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-purple-600 font-medium uppercase">mixed</p>
              <p className="text-lg font-semibold">{breakdown.mixed}%</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-amber-500 font-medium uppercase">ai</p>
              <p className="text-lg font-semibold">{breakdown.ai}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

