// Simple file-based storage for admin data
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const BLOG_POSTS_FILE = path.join(DATA_DIR, 'blog-posts.json');
const ABOUT_FILE = path.join(DATA_DIR, 'about.json');

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Projects management
export async function saveProjects(projects: any[]) {
  await ensureDataDir();
  await writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
}

export async function loadProjects(): Promise<any[]> {
  try {
    if (!existsSync(PROJECTS_FILE)) {
      return [];
    }
    const data = await readFile(PROJECTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Blog posts management
export async function saveBlogPosts(posts: any[]) {
  await ensureDataDir();
  await writeFile(BLOG_POSTS_FILE, JSON.stringify(posts, null, 2));
}

export async function loadBlogPosts(): Promise<any[]> {
  try {
    if (!existsSync(BLOG_POSTS_FILE)) {
      return [];
    }
    const data = await readFile(BLOG_POSTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// About page management
export async function saveAboutData(aboutData: any) {
  await ensureDataDir();
  await writeFile(ABOUT_FILE, JSON.stringify(aboutData, null, 2));
}

export async function loadAboutData(): Promise<any> {
  try {
    if (!existsSync(ABOUT_FILE)) {
      return null;
    }
    const data = await readFile(ABOUT_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}