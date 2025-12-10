import {create} from 'zustand'
import { AnalysisResult} from '@/lib/types';

type ScanState ={
    stage:'idel' | 'scanning' | 'analyzing' | 'completed' | 'error';
    taskId:string | null;
    result: AnalysisResult | null;

    // Actions
    setStage:(stage:ScanState['stage'])=>void;
    setTaskId:(taskId:string | null)=>void;
    setResult:(result:AnalysisResult | null)=>void;
    reset:()=>void;
}

export const useScanStore = create<ScanState>((set) => ({
    stage: 'idel',
    taskId: null,
    result: null,

    setStage: (stage) => set({ stage }),
    setTaskId: (taskId) => set({ taskId }),
    setResult: (result) => set({ result }),
    reset: () => set({ stage: 'idel', taskId: null, result: null }),
}));