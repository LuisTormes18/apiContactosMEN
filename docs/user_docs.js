/**
 * @swagger
 * components:
 *  schemas:
 *    Response:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          description: codigo de respuesta
 *        msg:
 *          type: string
 *          description: mensage de respuesta
 */
/**
 * @swagger
 * components:
 *  schemas:
 *    Token:
 *      type: object
 *      properties:
 *        token:
 *          type: string
 *          description: token para validar
 *      required:
 *        - token
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: nombre del usuario
 *        email:
 *          type: string
 *          description: email del usuario
 *      required:
 *        - email
 *        - password
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: endpoint de usuarios
 */


/**
 * @swagger
 * /users/update:
 *   put:
 *     summary: Actualizar los datos de un usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *           Authorization: 
 *             schema: 
 *               $ref: '#/components/schemas/Token'
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *        description: Peticion exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 *       400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 */
 