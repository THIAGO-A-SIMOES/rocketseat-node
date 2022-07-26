import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesuseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
    handle(request: Request, response: Response): Response {
        return response.json(this.listCategoriesUseCase.execute());
    }
}

export { ListCategoriesController };
