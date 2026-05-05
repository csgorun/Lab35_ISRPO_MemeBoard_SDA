async function getAllMemes() {
    const response = await fetch(API_URl);
    if (!response.ok) {
        throw new Error("Не удалось загрузить мемы");
    }
    return response.json();
}

async function  addMeme(title, category, reting) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            title: title,
            category: category,
            rating: rating,
        }),
    });
    if (!responce.ok) {
        const error = await responce.json();
        throw new Error(error.message || "Не удалось добавить мем");
    }
    return response.json();
}

async function deleteMeme(id) {
    const response = await fetch(`${API_URL}/${id}`,{
        method: "DELETE",
    });

    if (!response.ok) {
        const error = await responce.json();
        throw new Error(error.message || "Не удалось удалить мем");
    }
}