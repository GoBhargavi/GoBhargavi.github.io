'use client';
import ReactFlow, {
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    ConnectionMode
} from 'reactflow';
import 'reactflow/dist/style.css';

interface ArchitectureDiagramProps {
    type: 'micro-frontend' | 'rag-chat' | 'diafriend';
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ type }) => {
    // Define nodes/edges based on type
    const getInitialData = () => {
        switch (type) {
            case 'micro-frontend':
                return {
                    nodes: [
                        { id: '1', type: 'input', data: { label: 'Shell App (Host)' }, position: { x: 250, y: 0 }, style: { background: '#0a0a0c', color: '#fff', border: '1px solid #00f2ff' } },
                        { id: '2', data: { label: 'Clinical MFE' }, position: { x: 50, y: 150 }, style: { background: '#1a1b26', color: '#fff' } },
                        { id: '3', data: { label: 'Billing MFE' }, position: { x: 250, y: 150 }, style: { background: '#1a1b26', color: '#fff' } },
                        { id: '4', data: { label: 'Admin MFE' }, position: { x: 450, y: 150 }, style: { background: '#1a1b26', color: '#fff' } },
                        { id: '5', data: { label: 'Shared UI Lib' }, position: { x: 250, y: 300 }, style: { background: '#2e1065', color: '#fff', border: '1px dashed #a855f7' } },
                    ],
                    edges: [
                        { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#00f2ff' } },
                        { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#00f2ff' } },
                        { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#00f2ff' } },
                        { id: 'e2-5', source: '2', target: '5', style: { stroke: '#a855f7' } },
                        { id: 'e3-5', source: '3', target: '5', style: { stroke: '#a855f7' } },
                        { id: 'e4-5', source: '4', target: '5', style: { stroke: '#a855f7' } },
                    ]
                };
            case 'rag-chat':
                return {
                    nodes: [
                        { id: '1', type: 'input', data: { label: 'User Query' }, position: { x: 250, y: 0 }, style: { background: '#fff', color: '#000' } },
                        { id: '2', data: { label: 'FastAPI Orchestrator' }, position: { x: 250, y: 100 }, style: { background: '#0a0a0c', color: '#fff', border: '1px solid #00f2ff' } },
                        { id: '3', data: { label: 'Vector DB (pgvector)' }, position: { x: 50, y: 200 }, style: { background: '#1a1b26', color: '#fff' } },
                        { id: '4', data: { label: 'OpenAI (LLM)' }, position: { x: 450, y: 200 }, style: { background: '#1a1b26', color: '#fff' } },
                        { id: '5', type: 'output', data: { label: 'Response' }, position: { x: 250, y: 300 }, style: { background: '#00f2ff', color: '#000' } },
                    ],
                    edges: [
                        { id: 'e1-2', source: '1', target: '2', animated: true },
                        { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Retrieve Context' },
                        { id: 'e2-4', source: '2', target: '4', animated: true, label: 'Generate' },
                        { id: 'e3-2', source: '3', target: '2', animated: true },
                        { id: 'e4-2', source: '4', target: '2', animated: true },
                        { id: 'e2-5', source: '2', target: '5', animated: true },
                    ]
                };
            default:
                return { nodes: [], edges: [] };
        }
    };

    const { nodes: initialNodes, edges: initialEdges } = getInitialData();
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div className="h-[400px] w-full border border-white/10 rounded-none overflow-hidden bg-obsidian-900/50 backdrop-blur-sm">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                attributionPosition="bottom-right"
                connectionMode={ConnectionMode.Loose}
            >
                <Background color="#444" gap={16} />
                <Controls className="bg-white/10 text-white border-white/10" />
            </ReactFlow>
        </div>
    );
};

export default ArchitectureDiagram;
