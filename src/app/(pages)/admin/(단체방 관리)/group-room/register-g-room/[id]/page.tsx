"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Textarea,
  useDisclosure,
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import MainButton from "@/components/button";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabel from "@/components/InputWithLabel";
import { pages } from "next/dist/build/templates/app-page";
import page from "../page";
import row5Column52 from "@/data/tables/column3/row5column52";
import React, { useState } from "react";

const RegisterPageDetail = () => {
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row5Column52.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row5Column52.slice(start, end));
    return row5Column52.slice(start, end);
  }, [page, row5Column52, 5, rowsPerPage]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <CommonHeader title="단체방 상세정보" />
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <MainButton text="조회" />
          <div className="w-[350xp]"></div>
          <div className="w-[350xp]"></div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              이름(닉네임)
            </h3>
            <div>
              <Input
                placeholder="홍길동"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              아이디(이메일)
            </h3>
            <div>
              <Input
                placeholder=""
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              휴대폰 번호
            </h3>
            <div>
              <Input
                placeholder="010-0000-0000"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* the second part  */}
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <InputWithLabel
            label="투어일자"
            placeholder=""
            inputStyles="w-[350px] h-[44px]"
          />
          <DropDownWithLabel
            title="투어시간"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              결제방법
            </h3>
            <div>
              <Input
                placeholder="고객"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              단체방명
            </h3>
            <div>
              <Input
                placeholder=""
                type="text"
                onChange={() => {}}
                classNames={{
                  input: [
                    "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
                  ],
                  inputWrapper: [
                    "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px] ",
                  ],
                }}
                className="w-full text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
              />
            </div>
          </div>
          <div className="w-[350px]"></div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="문제 등급"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="진행상태"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <div className="w-[350px]"></div>
        </div>
        <div className="flex justify-start">
          <div className="mb-3">
            <h3 className="my-4 font-bold text-mainGray">투어코스</h3>
            <CheckboxGroup orientation="horizontal">
              <Checkbox className="mx-1" value="1">
                개항장거리
              </Checkbox>
              <Checkbox className="mx-1" value="2">
                차이나타운
              </Checkbox>
              <Checkbox className="mx-1" value="3">
                동화마을
              </Checkbox>
              <Checkbox className="mx-1" value="4">
                자유공원
              </Checkbox>
              <Checkbox className="mx-1" value="4">
                전구간
              </Checkbox>
            </CheckboxGroup>
          </div>
        </div>
      </div>
      {/* the third part  */}
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <h3 className="font-bold text-mainGray">투어 인원수</h3>
        <div className="my-6 flex items-center gap-4">
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap text-sm font-bold text-mainGray">
              대인
            </h3>
            <div>
              <Input
                placeholder=""
                type="text"
                onChange={() => {}}
                classNames={{
                  input: [
                    "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
                  ],
                  inputWrapper: [
                    "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px] ",
                  ],
                }}
                className="w-full text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
              />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap text-sm font-bold text-mainGray">
              청소년
            </h3>
            <div>
              <Input
                placeholder=""
                type="text"
                onChange={() => {}}
                classNames={{
                  input: [
                    "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
                  ],
                  inputWrapper: [
                    "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px] ",
                  ],
                }}
                className="w-full text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
              />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap text-sm font-bold text-mainGray">
              어르신
            </h3>
            <div>
              <Input
                placeholder=""
                type="text"
                onChange={() => {}}
                classNames={{
                  input: [
                    "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
                  ],
                  inputWrapper: [
                    "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px] ",
                  ],
                }}
                className="w-full text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
              />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap text-sm font-bold text-mainGray">
              인천시민
            </h3>
            <div>
              <Input
                placeholder=""
                type="text"
                onChange={() => {}}
                classNames={{
                  input: [
                    "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
                  ],
                  inputWrapper: [
                    "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px] ",
                  ],
                }}
                className="w-full text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
              />
            </div>
          </div>
        </div>
        <div className="my-6 flex items-center gap-4">
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              투어 인원수(명)
            </h3>
            <div>
              <Input
                placeholder="40"
                type="text"
                onChange={() => {}}
                className="w-full rounded-[12px] border-[1px] border-[#DADFE2] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled
              />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              결제금액(원)
            </h3>
            <div>
              <Input
                placeholder="120,000원"
                type="text"
                onChange={() => {}}
                className="w-full rounded-[12px] border-[1px] border-[#DADFE2] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="my-4 text-mainGray"> 비고</h1>
          <Textarea
            key="bordered"
            variant="bordered"
            placeholder=""
            height="590px"
            classNames={{
              input: "text-[15px] placeholder:text-mainGray ",
            }}
            minRows={8}
          />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <button className="h-[50px] rounded-xl bg-[#A2ABAF] px-8 py-[14px] text-white">
          취소
        </button>
        <div className="mt-5 flex gap-5">
          <button className="h-[50px] rounded-xl bg-[#6D8EEB] px-8 py-[14px] text-white">
            등록
          </button>
          <button className="h-[50px] rounded-xl bg-[#424242] px-8 py-[14px] text-white">
            삭제
          </button>
          <button className=""></button>
        </div>
      </div>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <article>
                  <Table
                    aria-label="Data Table"
                    shadow="none"
                    classNames={{
                      th: [
                        "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center ",
                      ],
                      td: [
                        "px-6 py-3 text-center font-normal text-base text-[#363941]",
                      ],
                    }}
                    bottomContent={
                      <div className="mt-8 flex w-full justify-center">
                        <Pagination
                          isCompact
                          showControls
                          showShadow
                          color="primary"
                          page={page}
                          total={pages}
                          onChange={(page) => setPage(page)}
                        />
                      </div>
                    }
                  >
                    <TableHeader className="th-border-1">
                      <TableColumn>No</TableColumn>
                      <TableColumn>회원명</TableColumn>
                      <TableColumn>현재코스</TableColumn>
                      <TableColumn>현재 경유지</TableColumn>
                      <TableColumn>아이디(이메일)</TableColumn>
                      <TableColumn>휴대폰 번호</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {items.map((row) => (
                        <TableRow key={row.id} className="border-b-1">
                          <TableCell>{row.No}</TableCell>
                          <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                            <Link
                              href={`/admin/membership/customer-satisfaction/${row.id}`}
                              className="text-blue underline underline-offset-2"
                            >
                              {row.name}
                            </Link>
                          </TableCell>
                          <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {row.currentCourse}
                          </TableCell>
                          <TableCell>{row.currentTransitPoint}</TableCell>
                          <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {row.email}
                          </TableCell>
                          <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {row.phoneNumber}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </article>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RegisterPageDetail;
