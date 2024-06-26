import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { Question } from '../entities/question.entity';
export declare class QuestionPaginator extends Paginator<Question> {
    data: Question[];
}
export declare class GetQuestionDto extends PaginationArgs {
    orderBy?: QueryReviewsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
    answer?: string;
    product_id?: string;
}
export declare enum QueryReviewsOrderByColumn {
    NAME = "NAME",
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT"
}
