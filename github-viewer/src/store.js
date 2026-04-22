import { create } from "zustand";

const useStore = create((set, get) => ({
  // Kullanıcı bilgileri — API'den gelecek, başta null
  user: null,
  // Loading ve error — bildiğin pattern
  loading: false,
  error: null,
  repos: [],

  // API'den kullanıcı bilgilerini çek
  // username parametresi SearchBar'dan gelecek

  fetchUser: async (username) => {
    // bos username kontrolu
    if (username.trim() === "") return;

    // Loading başlat, eski data ve hatayı temizle
    set({ loading: true, error: null, user: null });

    try {
      // GitHub API'ye istek at
      const res = await fetch(`https://api.github.com/users/${username}`);
      // Kullanıcı bulunamazsa 404 döner
      if (!res.ok) throw new Error("User not found");
      // JSON'a çevir
      const data = await res.json();
      // Sadece ihtiyacımız olan bilgileri kaydet — normalize etme pattern'i
      // Weather app'te de aynısını yapmıştık
      set({
        user: {
          avatar: data.avatar_url,
          name: data.name || data.login,
          username: data.login,
          bio: data.bio || "No bio available",
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          url: data.html_url,
        },
        loading: false,
      });
      get().fetchRepos(username);
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  fetchRepos: async (username) => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      );
      if (!res.ok) throw new Error("Failed to fetch repos");
      const data = await res.json();

      set({
        repos: data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description",
          language: repo.language || "Unknown",
          stars: repo.stargazers_count,
          url: repo.html_url,
        })),
      });
    } catch (err) {
      console.log("Repos fetch error:", err);
    }
  },
}));

export default useStore;
