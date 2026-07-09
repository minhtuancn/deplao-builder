import { create } from 'zustand';

interface Workspace {
  id: string;
  name: string;
  type: string;
}

interface WorkspaceState {
  /** Currently selected workspace ID (default 'default') */
  selectedId: string;
  /** Available workspaces fetched from API */
  workspaces: Workspace[];
  /** Set the selected workspace */
  setSelected: (id: string) => void;
  /** Load workspaces from API */
  loadWorkspaces: (fetcher: () => Promise<{ workspaces: Workspace[] }>) => Promise<void>;
}

const DEFAULT_ID = 'default';

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  selectedId: localStorage.getItem('deplao_workspace') || DEFAULT_ID,
  workspaces: [],

  setSelected: (id: string) => {
    localStorage.setItem('deplao_workspace', id);
    set({ selectedId: id });
  },

  loadWorkspaces: async (fetcher) => {
    try {
      const data = await fetcher();
      const list = data.workspaces || [];
      set({ workspaces: list });
      // If current selection is 'default' but we have real workspaces, use the first one
      const current = get().selectedId;
      if (current === DEFAULT_ID && list.length > 0) {
        get().setSelected(list[0].id);
      }
    } catch {
      // Workspace list might not be available — fall back to 'default'
    }
  },
}));
