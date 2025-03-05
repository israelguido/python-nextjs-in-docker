from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Adicionando CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todos os domínios; altere conforme necessário
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos HTTP
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Modelo de dados do post
class Post(BaseModel):
    title: str
    content: str
    category: str
    slug: str

# Exemplo de dados
posts = [
    {"title": "Post 1", "content": "Conteúdo do Post 1", "category": "tech", "slug": "post-1"},
    {"title": "Post 2", "content": "Conteúdo do Post 2", "category": "tech", "slug": "post-2"},
    {"title": "Post 3", "content": "Conteúdo do Post 3", "category": "lifestyle", "slug": "post-3"},
]

# Rota atualizada sem o prefixo "posts"
@app.get("/{category}/{slug}", response_model=Post)
async def get_post_by_category_and_slug(category: str, slug: str):
    for post in posts:
        if post["category"] == category and post["slug"] == slug:
            return post
    raise HTTPException(status_code=404, detail="Post não encontrado")

# Rota com todos os posts limite de 10
@app.get("/posts", response_model=list[Post])
async def get_all_posts(limit: int = 10):
    return posts[:limit]