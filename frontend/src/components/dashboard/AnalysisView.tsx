'use client'
import { useScanStore } from '@/store/useScanStore'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Progress  from '../ui/progress'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export function AnalysisView() {
  const { result } = useScanStore();
  if (!result) return null;

  const data = [
    { name: 'Score', value: result.overall_score },
    { name: 'Gap', value: 100 - result.overall_score },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* 1. Score Card */}
      <Card className="bg-slate-900 border-slate-800 col-span-1">
        <CardHeader><CardTitle>ATS Score</CardTitle></CardHeader>
        <CardContent className="flex flex-col items-center">
            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} innerRadius={60} outerRadius={80} dataKey="value">
                            <Cell key="score" fill="#3b82f6" />
                            <Cell key="gap" fill="#1e293b" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <span className="text-5xl font-bold mt-[-100px] mb-[60px]">{result.overall_score}</span>
        </CardContent>
      </Card>

      {/* 2. Missing Keywords (The most valuable part) */}
      <Card className="bg-slate-900 border-slate-800 col-span-1 md:col-span-2">
        <CardHeader><CardTitle>Missing Keywords</CardTitle></CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                {result.missing_keywords.map((kw) => (
                    <span key={kw} className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-sm">
                        {kw}
                    </span>
                ))}
            </div>
            <p className="text-slate-400 text-sm mt-4">
                Adding these specific keywords can increase your ATS ranking by ~20%.
            </p>
        </CardContent>
      </Card>

      {/* 3. Tech Skills Found */}
      <Card className="bg-slate-900 border-slate-800 col-span-3">
          <CardHeader><CardTitle>Skills Detected</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
              {result.technical_skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-sm">
                      {skill}
                  </span>
              ))}
          </CardContent>
      </Card>

    </div>
  )
}