export async function getRepos(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      },
      next: { revalidate: 3600 } // revalida a cada hora no Next 13+ (app dir)
    });
    return await res.json();
  }